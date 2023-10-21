import DModels from "./DmodelsText";

/**Micro Text Data starts ::: Micro Data i refer here to : the Text data which is not lumpsum + being less used (<>) */
const DATA_ABOUTUS_BOXES: TAboutUsBoxes = [{
  heading: "150+", description: "Members",
}, {
  heading: "8", description: "SubSystems",
}, {
  heading: "6+", description: "Years Completed",
}, { heading: "8+", description: "Projects Completed", },
]
/**Team Members Data for B4(<>) {@/components/parts/b4-ourTeam} */
const DATA_TEAM_members: TTeam = [{
  name: "Siddharth",
  designation: "Team Lead",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image: "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/images/members/aditya.png",
},
{
  name: "Siddharth",
  designation: "Team Lead",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image:
    "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/images/members/aditya.png",
},
{
  name: "Siddharth",
  designation: "Team Lead",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image:
    "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/images/members/aditya.png",
},

]


const DMicroText: TMicroText = {
  AboutUsBoxes: DATA_ABOUTUS_BOXES,
  Team: DATA_TEAM_members,
  Models: DModels.Models,
}

export default DMicroText;



