// import { players_data } from '../assets/data/players_data.js';

// const grades = [1000, 10000, 50000],
//   colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
//   radii = [7, 7, 7];

// export const playerMap = {
//   name: "playerMap",
//   title: "player",
//   style: "mapbox://styles/mapbox/dark-v10",
//   data: players_data,
//   center: [0, 16],
//   zoom: 1,
//   projection: "mercator",
//   id:"do_not_change_this_value",

//   layerOptions: {
//     id: "do_not_change_this_valu",
//     type: "circle",
//     source: "do_not_change_this_value",
//     paint: {
//       // increase the radii of the circle as the zoom level and dbh value increases
//       "circle-radius": {
//         property: "Attendance",
//         stops: [
//           [
//             {
//               zoom: 5,
//               value: grades[0],
//             },
//             radii[0],
//           ],
//           [
//             {
//               zoom: 5,
//               value: grades[1],
//             },
//             radii[1],
//           ],
//           [
//             {
//               zoom: 5,
//               value: grades[2],
//             },
//             radii[2],
//           ],
//         ],
//       },
//       "circle-color": {
//         property: "Attendance",
//         stops: [
//           [grades[0], colors[0]],
//           [grades[1], colors[1]],
//           [grades[2], colors[2]],
//         ],
//       },
//       "circle-stroke-color": "white",
//       "circle-stroke-width": 1,
//       "circle-opacity": 0.6,
//     },
//   },
// };