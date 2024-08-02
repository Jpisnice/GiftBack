import Charity from '@/models/Charitys';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let validCharity = await Charity.findById(req.body.charityId);

            if (validCharity) {
                validCharity['isDeleted'] = 1;
                await validCharity.save();

                res.status(200).json({ message: "Deleted Successfully!" });
            }
            else {
                res.status(404).json({ message: "Charity Not Found!" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
}

export default connectDb(handler);