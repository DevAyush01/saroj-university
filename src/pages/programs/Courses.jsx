import { GraduationCap, BrainCircuit, Atom, Code2, BriefcaseMedical, Paintbrush2, Globe2, Rocket } from 'lucide-react';
import CoursePage from '../../components/ShowPrograms';
import universityData from '../../assets/json/universityData.json'; 
import Layout from '../../components/Layout';

const Courses = () => {
 

  return (
    <Layout>
    <CoursePage universityData={universityData} />
    </Layout>
  );
};

export default Courses;