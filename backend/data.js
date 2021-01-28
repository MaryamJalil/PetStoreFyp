import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Abdul',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Abdul Hai',
        logo: '/images/logo1.jpg',
        description: 'best shoes sellers',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Ali',
      email: 'seller@example.com',
      password: bcrypt.hashSync('1234', 8),
      isSeller: true,
      seller: {
        name: 'Lee',
        logo: '/images/logo1.jpg',
        description: 'great shoes sellers',
        rating: 4.0,
        numReviews: 450,
      },
      
    },

    {
      name: 'Abdul Hai',
      email: 'doctor@example.com',
      password: bcrypt.hashSync('1234', 8),
      isDoctor: true,
      doctor: {
        name: 'Maryam',
        logo: '/images/logo2.jpg',
        rating: 4.0,
        numReviews: 450,
      },
      
    },
    {
      name: 'Sara',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
    },
  ],
  docprofiles:[
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/logo1.jpg',
      fees: 89,
      experience: 'Pet',
     // countInStock: 20,
      rating: 4.5,
      numReviews: 15,
      review:{
        name: 'aaj',
        rating: 4.5,
        comment: 'jhsjgd',
      }
      //description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p1.jpg',
      fees: 89,
      experience: 'Pet',
     // countInStock: 20,
      rating: 4.5,
      numReviews: 15,
      review:{
        name: 'aaj',
        rating: 4.5,
        comment: 'jhsjgd',
      }
      //description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p1.jpg',
      fees: 89,
      experience: 'Pet',
     // countInStock: 20,
      rating: 4.5,
      numReviews: 15,
      review:{
        name: 'aaj',
        rating: 4.5,
        comment: 'jhsjgd',
      }
      //description: 'This is a great product.',
    },
   
  ],
  products: [
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p1.jpg',
      price: 89,
      brand: 'Pet',
      countInStock: 20,
      rating: 4.5,
      numReviews: 15,
      description: 'this is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p2.jpg',
      price: 79,
      brand: 'Pet',
      countInStock: 0,
      rating: 4.0,
      numReviews: 15,
      description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p3.jpg',
      price: 189,
      brand: 'Pet',
      countInStock: 20,
      rating: 4.9,
      numReviews: 15,
      description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p4.jpg',
      price: 89,
      brand: 'Pet',
      countInStock: 20,
      rating: 4.5,
      numReviews: 9,
      description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p5.jpg',
      price: 70,
      brand: 'Pet',
      countInStock: 20,
      rating: 4.5,
      numReviews: 7,
      description: 'This is a great product.',
    },
    {
      name: 'Pet',
      category: 'Pet', // 680 x 830 px
      image: '/images/p6.jpg',
      price: 60,
      brand: 'pet',
      countInStock: 20,
      rating: 4.7,
      numReviews: 10,
      description: 'This is a great product.',
    },
  ],
};
export default data;