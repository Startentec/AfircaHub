export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Recruiter",
    headerName: "Recruiter",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },

  {
    field: "company",
    headerName: "Company",
    width: 100,
  },

  {
    field: "mobile",
    headerName: "Mobile",
    width: 100,
  },
  {
    field: "recruits",
    headerName: "Recruits",
    width: 100,
    
  },
  

  {
    field: "reviews",
    headerName: "Reviews",
    width: 100,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    mobile: "07876542315",
    email: "1snow@gmail.com",
    company: 35,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    mobile: "07876542315",
    company: 42,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    mobile: "07876542315",
    company: 45,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    mobile: "07876542315",
    company: 16,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    mobile: "07876542315",
    company: 22,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    mobile: "07876542315",
    company: 15,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    mobile: "07876542315",
    company: 44,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    mobile: "07876542315",
    company: 36,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    mobile: "07876542315",
    company: 65,
    recruits:"45",
    reviews:"21",
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    mobile: "07876542315",
    company: 65,
    recruits:"45",
    reviews:"21",
  },
];
