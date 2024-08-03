import Product from '@/models/Products';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { name, price, link, charityId, imgName } = req.body;

            // Check if the product already exists and is not deleted
            const existingProduct = await Product.findOne({ name, charityId, isDeleted: 0 });

            if (existingProduct) {
                // If the product already exists and is not deleted, return an error response
                return res.status(400).json({ message: "Item already imported!" });
            }

            // If the product does not exist, create a new product
            let newProduct = new Product();
            newProduct['name'] = name;
            newProduct['price'] = price;
            newProduct['link'] = link;
            newProduct['charityId'] = charityId;
            newProduct['imgName'] = imgName;
            newProduct['importFlag'] = 1;
            await newProduct.save();

            res.status(200).json({ message: "Data Saved Successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    } else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
}

export default connectDb(handler);
