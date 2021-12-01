import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost/ecommercedb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
        console.log(`MongoDB connected`);
    }
    catch(error) {
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB