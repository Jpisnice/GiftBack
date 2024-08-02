import Product from "@/models/Products";
import connectDb from "@/middleware/dbConnect";

const handler = async (req, res) => {
  const { charityId } = req.body;

  if (!charityId) {
    return res.status(400).json({ error: "charityId is required" });
  }

  try {
    let products = await Product.find({ isDeleted: 0, charityId })
      .select("-createdAt -updatedAt -isDeleted")
      .sort({ _id: -1 });
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
};

export default connectDb(handler);
