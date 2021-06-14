export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        userId: 1,
        title: "House for sale",
        description: "I will sell a one-story building in a quiet and peaceful neighborhood, near the center",
        createDate: "02.04.2021",
        updateDate: "01.06.2021",
        phone: "654-456-654",
        price: "30000",
        image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      },
      {
        id: 2,
        userId: 2,
        title: "Apartment for rent",
        description: "Apartment on the third floor, two bedrooms",
        createDate: "28.05.2021",
        updateDate: "",
        phone: "789-987-789",
        price: "200",
        image: "https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_960_720.jpg",
      },
      {
        id: 3,
        userId: 1,
        title: "Car for Sale",
        description: "Good condition, recently replaced filters, timing gear and oils. New pads and clutch. I'm selling because I bought another one.",
        createDate: "25.01.2021",
        updateDate: "15.05.2021",
        phone: "654-456-654",
        price: "5000",
        image: "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg",
      },
      {
        id: 4,
        userId: 3,
        title: "Laptop for sale",
        description: "Fully functional. Complete. New wine system 10.",
        createDate: "12.06.2021",
        updateDate: "",
        phone: "123-321-123",
        price: "1000",
        image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg",
      },
      {
        id: 5,
        userId: 4,
        title: "Laptop for sale",
        description: "The computer is visually in very good condition.",
        createDate: "23.05.2021",
        updateDate: "",
        phone: "753-357-753",
        price: "1200",
        image: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg",
      },
    ],    
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    id: 1,
    name: 'Neo',
    logged: true,
  },
};
