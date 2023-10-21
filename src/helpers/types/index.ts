

interface TPacket {
    Models: Tmodels,
    SubSystem: TSubSystem,
    AboutUsBoxes: TAboutUsBoxes,
    LatestProjects : TLatestProjects,
    Team : TTeam,
    LatestAchievements : TLatestAchievements,
}
interface TMicroText {
    AboutUsBoxes: TAboutUsBoxes,
    Team : TTeam,
    Models : Tmodels,

}
interface TModels {
    LatestProjects: TLatestProjects,
    Models: Tmodels,
}

type TSubSystem = {
    headings: string;
    description: string;
    image: string;
}[];

type TAboutUsBoxes = {
    heading: string;
    description: string;
}[];

type TLatestProjects = {
    Image: string;
    Name: string;
    description: string;
}[];

type TTeam = {
    name: string;
    designation: string;
    description: string;
    image: string;
}[]

type TLatestAchievements = {
    AchievementName : string;
    AchievementImage : string;
}[]

type Tmodels = {
    index : number;
    name : string;
    image: string;
    description : string;
}[]