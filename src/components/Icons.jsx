import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiThreedotjs } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export default function Icons() {
  return (
    <div style={styles.iconContainer}>
      <DiHtml5 size={50} color="white" />
      <DiCss3 size={50} color="white" />
      <DiJsBadge size={50} color="white" />
      <DiMongodb size={50} color="white" />
      <FaReact size={50} color="white" />
      <FaNodeJs size={50} color="white" />
      <SiThreedotjs size={50} color="white" />
      <DiGithubBadge size={50} color="white" />
      <TbBrandCpp size={50} color="white" />
      <FaGitAlt size={50} color="white" />
      <SiNpm size={50} color="white" />
      <RiNextjsLine size={50} color="white"/>
    </div>
  );
}

const styles = {
  iconContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 icons per row
    gap: '40px', // space between icons
    justifyItems: 'center', // center icons horizontally
    alignItems: 'center', // center icons vertically
  },
};

