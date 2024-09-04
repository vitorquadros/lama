import mongoose, { type ConnectionStates } from 'mongoose';

interface Connection {
  isConnected: ConnectionStates;
}

const connection: Connection = {
  isConnected: 0
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO || 'default');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to database!');
  }
};
