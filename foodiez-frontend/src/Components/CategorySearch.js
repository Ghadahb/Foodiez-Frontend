// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function CategorySearch() {
//   const options = categories.map((option) => {
//     const firstLetter = option.title[0].toUpperCase();
//     return {
//       firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//       ...option,
//     };
//   });

//   return (
//     <Autocomplete
//       id="grouped-demo"
//       options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//       groupBy={(option) => option.firstLetter}
//       getOptionLabel={(option) => option.title}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Category Option" />}
//     />
//   );
// }

// const categories = [
//   { title: "Arabic" },
//   { title: "Italian" },
//   { title: "Vegan" },
//   { title: "Healthy" },
//   { title: "International" },
//   { title: "Thai" },
//   { title: "Breakfast" },
//   { title: "Dessert" },
//   { title: "Japanese" },
//   { title: "Indian" },
//   { title: "Asian" },
//   { title: "Bakery" },
//   { title: "Kuwaiti" },
//   { title: "Asian" },
//   { title: "Brunch" },
  
  
// ];