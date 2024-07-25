import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import {Fade} from "react-reveal";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );

  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [showAll, setShowAll] = useState(false); // Add state for showing all projects
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => (result.ok ? result.json() : Promise.reject(result)))
        .then(response => setrepoFunction(response.data.user.pinnedItems.edges))
        .catch(error => {
          console.error(`${error} (check Projects section configuration)`);
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  // Hardcoded projects
  const projects = [
    {
      title: "E-Workspace (Chemoscience 2013)",
      description:
        "is an information system used to manage engineer's work schedules and record laboratory instrument configuration data for each client site"
    },
    {
      title: "SISS (SJF Semarang 2015)",
      description:
        "is stands for Sistem Informasi SJF Semarang. This system is used for processing the company operational data such as administrative data, production data, inventory data, sales data, purchasing data and accounting data. The final result of this system is reports and graphical dashboard."
    },
    {
      title: "Official Website (Indriati Hospital 2016)",
      description:
        "Indriati Hospital's first official website, launched in 2017. This website was fully upgraded in 2020 with a new interface. This website is used to provide information about the services available at Indriati Hospital, the doctor's practice schedule, and a brief history of the hospital."
    },
    {
      title: "InKaRI (Indriati Hospital 2017)",
      description:
        "is stands for Informasi Kamar Rawat Inap. This application provide the information about bed occupancy of inpatient wards."
    },
    {
      title: "Instasio (Indriati Hospital 2017)",
      description:
        "is stands for Informasi Status Pasien Operasi. This application provides information about the condition status of patients who are performed surgery."
    },
    {
      title: "EDP Workspace (Indriati Hospital 2017)",
      description:
        "is an information system used to manage work data performed by IT staf. Provides features of work activity recording, work order request, work scheduling, work reports, indexing, configuration data collection, and quality indicator management."
    },
    {
      title: "Indriati Web Management Tools (Indriati Hospital 2017)",
      description:
        "is an administration portal to manage the content of Indriati Hospital Official Website. This tools was using by our marketing department. First release was at 2017 and was upgraded at 2020."
    },
    {
      title: "Indriati PACS System (Indriati Hospital 2017)",
      description:
        "A DICOM viewer application used by specialists to to view the results of radiological examinations electronically."
    },
    {
      title: "SPGDT Bridging (Indriati Hospital 2018)",
      description:
        "A gateway application for integration data between internal hospital data and SPGDT data."
    },
    {
      title: "SPPSDM (Indriati Hospital 2018)",
      description:
        "is stands for Sistem Pengelolaan dan Pengembangan SDM. This application is used to manage employee data such as profiles, education, experience, training, salary, MCU results, and STR and SIP. This application is equipped with auto generated CV and income tax (pph21) withholding slip features."
    },
    {
      title: "PIRSI (Indriati Hospital 2018)",
      description:
        "is stands for Pusat Informasi Rumah Sakit Indriati. This application is used as an information centre which provide the information such as announcement, policy documents, decrees, regulations, SPO documents, and licensing documents. This application managed by legal and secretariat department. "
    },
    {
      title: "WaktunyaNgopi (Freelance Project 2019)",
      description: "Point-of-Sales application of a coffee shop."
    },
    {
      title: "Siranap Bridging (Indriati Hospital 2019)",
      description:
        "A gateway application for integration data between internal hospital data and Siranap data."
    },
    {
      title: "Aplicare Bridging (Indriati Hospital 2019)",
      description:
        "A gateway application for integration data between internal hospital data and BPJS Aplicare data."
    },
    {
      title: "Baperista (Freelance Project 2020)",
      description:
        "A coffee shop app that provides point-of-sales, accounting, and inventory management features."
    },
    {
      title: "Disposisi Elektronik (Indriati Hospital 2021)",
      description:
        "is an application used to manage orders from upper management to lower ranks to follow up on incoming mail sent by other organisations or individuals (disposition). This application then developed into a means of discussion within the management of Indriati Hospital."
    },
    {
      title: "Leanscape (Indriati Hospital 2021)",
      description:
        "An application used to record lean management activities carried out by each department at Indriati Hospital. This application is able to present the existing progress of each activity and the achievements of each department."
    },
    {
      title: "INACBG's EKlaim Bridging (Indriati Hospital 2021)",
      description:
        "A gateway application to integrate data in the hospital information system with the BPJS Health claim system."
    },
    {
      title: "BPJS SEP Bridging (Indriati Hospital 2022)",
      description:
        "A gateway application for integration data between internal hospital data and BPJS data. This application used to manage the SEP documents."
    },
    {
      title: "Indriati Queueing System (Indriati Hospital 2022)",
      description:
        "It is an application used to manage the queue of outpatient visits. This application provides a queue number calling feature"
    },
    {
      title: "mobileJKN Bridging (Indriati Hospital 2022)",
      description:
        "A gateway application for integration data between internal hospital data and BPJS mobileJKN data."
    },
    {
      title: "Marvel (Freelance Project 2022)",
      description:
        "Manufacturing information system which used at plastic bag factory. This application has several modules including raw material purchasing, production, inventory, sales, and labour management."
    },
    {
      title: "Nurse e-Credential (Indriati Hospital 2023)",
      description:
        "is an application used to manage nurse credential files electronically. This application is one of the digital transformation that has been carried out by Indriati Hospital, especially in the efficiency of paper usage for nurse credentialing activities."
    },
    {
      title: "HIS Helper System (Indriati Hospital 2023)",
      description:
        "A helper application that accommodates modules that cannot be provided by the main HIS."
    },
    {
      title: "FORIN (Indriati Hospital 2023)",
      description:
        "stands for Formularium Indriati. An application that is used to manage data related to the drug formulary at Indriati Hospital including collecting drug quotation letter, supplier data, auto generated answer letter, and electronic drug formulary book."
    },
    {
      title: "Doctor's Fee (Indriati Hospital 2023)",
      description:
        "An application to calculate doctor's fees based on the hospital's requirements and policies for medical services."
    },
    {
      title: "SatuSehat Bridging (Indriati Hospital 2023)",
      description:
        "A gateway application for integration data between internal hospital data and SatuSehat data."
    },
    {
      title: "My Indriati (Indriati Hospital 2024)",
      description:
        "is a mobile application that has several functions including reservations, electronic medical records, promotions, health education, MCU order and result, membership, and drug delivery services."
    },
    {
      title: "Owner Approval Portal (Indriati Hospital 2024)",
      description:
        "An application designed to accommodate the approval needs of procurement data and HR requirements. This application is used by the procurement department, HR, directors, and hospital owners."
    },
    {
      title: "i-Care Bridging (Indriati Hospital 2024)",
      description:
        "A gateway application for integration data between internal hospital data and BPJS iCare data."
    },
    {
      title: "Indriati Employee Attendance System (Indriati Hospital 2024)",
      description:
        "A subsystem of SPPSDM. This application used to manage the employee attendance data which applies the location based concept."
    },
    {
      title: "Auto Min-Max (Indriati Hospital 2024)",
      description:
        "is an automatic sytem used to calculate the min and max value of the inventory quantity. The effective inventory quantity in this application is calculated using a combination of the MMSL and ITR methods."
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3); // Show all projects or only the first 3

  if (!(typeof repo === "string") && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">My Projects</h1>
          <p id="project-header">Here are some projects I have done so far:</p>
          <br />
          <div className="repo-cards-div-main">
            {visibleProjects.map((project, index) => (
              <Fade bottom duration={1000} distance="40px" key={index}>
                <div>
                  <strong>{project.title}</strong>
                  <br />
                  {project.description}
                </div>
              </Fade>
            ))}
          </div>
          {!showAll && (
            <Button
              text={"More Projects"}
              className="project-button"
              onClick={() => {
                //console.log("Button clicked"); // Debugging statement
                setShowAll(true); // Show all projects when the button is clicked
              }}
            />
          )}
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
