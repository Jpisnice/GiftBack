import Product from "@/models/Products";
import connectDb from "@/middleware/dbConnect";

const handler = async (req, res) => {
  try {
    let validItem = await Product.findOne({
      isDeleted: 0,
      _id: req.body.productId,
    }).select("-createdAt -updatedAt -isActive -isDeleted");

    if (validItem) {
      res.status(200).json({ validItem });
    } else {
      res.status(404).json({ message: "Item Not Found!" });
    }
  } catch (error) {
    console.error("Error retrieving item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDb(handler);
