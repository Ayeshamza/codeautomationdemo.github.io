import React from 'react'
import styles from './app.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Our FAQs</div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item mb-3">

          <h2 class="accordion-header heading" id="flush-headingOne">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary bg-opacity-80 md:px-5 md:max-w-full lg:leading-69px leading-24px d-flex gap-3 text-white font-medium cursor-pointer justify-content-between text-xl w-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <div className={styles.heading}>

                What technologies and programming languages does CodeAutomation specialize in for development and testing?
              </div>
            </button>


          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">CodeAutomation boasts a diverse and highly skilled team of developers and testers with expertise in various technologies and programming languages. Our specialization includes but is not limited to:
              <br />
              Programming Languages: CodeAutomation is proficient in languages such as Java, Python, JavaScript, .NET, PHP, Ruby on Rails, and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              Frameworks and Tools: CodeAutomation leverages popular development frameworks and tools like Angular, Node.js, Vue.js, React Native, React.js, Spring Boot, Django, and others to accelerate development while maintaining code quality.
              Testing Technologies: Our testing experts are well-versed in various testing technologies and frameworks, including Selenium, Cypress, Playwright, Protractor, Katalon, Postman, Rest Assured, JUnit, JIRA, Appium, and many more, to ensure comprehensive test coverage and automation.
              CRM/CMS implementation and customization: CodeAutomation is proficient in languages such as Javascript, Aura, LWCs, Apex, Flows, Rest API, Java and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              AI/ML languages: We leverage our clients with AI/ML services and languages are: NumPy, SciPy, Pandas, PyTorch, matlab, Ruby on rails, Fortran, Golang, R language.</div>
          </div>

        </div>
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <div className={styles.heading}>
                What types of industries have CodeAutomation work with?
              </div>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">


              CodeAutomation’s extensive experience spans a broad spectrum of industries and sectors, allowing us to adapt and tailor our services to the unique requirements of each. Some of the industries we have worked with include:

              Healthcare: In the healthcare industry, we’ve contributed to the development of innovative software solutions, electronic health records (EHR), telemedicine platforms, and healthcare management systems to improve patient care and optimize workflows.
              Manufacturing and Logistics: Working with manufacturing and logistics companies, we’ve implemented solutions for supply chain management, inventory control, and production optimization. Our aim is to increase operational efficiency and reduce costs.
              Education: In the education sector, we’ve developed e-learning platforms, school management systems, and educational technology solutions. We focus on creating tools that facilitate learning and improve administrative processes.
              Automotive: CodeAutomation has worked with the automotive industry on projects ranging from software for vehicle diagnostics to manufacturing process optimization. We help automotive companies embrace digital transformation for enhanced performance..
              Energy and Utilities: We’ve collaborated with energy and utility companies to create software solutions for monitoring, control, and optimization. Our work contributes to improving resource management and sustainability practices.
              Government and Public Sector: CodeAutomation has experience working with government agencies on projects that involve digital transformation, citizen services, and data management. We prioritize security and compliance in these projects.
              Entertainment and Media: Our involvement in the entertainment and media industry includes developing content management systems, streaming platforms, and digital distribution solutions to enhance user engagement and content delivery.
            </div>
          </div>
        </div>
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                Where are CodeAutomation’s employees located?
              </div>

            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">CodeAutomation’s highly skilled workforce is strategically located across multiple global offices and remote locations to provide efficient and 24/7 support to our clients. While our main offices are situated in the USA, Canada, and Pakistan, we also have a distributed team of remote professionals collaborating from different parts of the world. This global presence ensures that we can cater to clients from diverse geographical regions and time zones, offering them the benefits of both local expertise and a global talent pool.</div>
          </div>
        </div>

        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                What types of testing services does CodeAutomation offer?
              </div>

            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">CodeAutomation’s comprehensive suite of testing services is designed to cover every aspect of software quality assurance, including:

              Functional Testing: We rigorously assess software functionality to ensure it meets specified requirements and functions as expected.
              Performance Testing: Our performance testing evaluates system responsiveness, scalability, and stability under various conditions to optimize application performance.
              Security Testing: We conduct security assessments to identify vulnerabilities and protect against potential threats, ensuring data integrity and user privacy.
              Automated Testing: We utilize automation frameworks to increase testing efficiency, reduce human error, and accelerate release cycles.
              Regression Testing: We perform regression tests to verify that new code changes do not negatively impact existing functionality.
              Our testing approach is thorough, and we employ a range of testing methodologies, including manual testing, automated testing, and continuous integration and continuous delivery (CI/CD) pipelines, to ensure that your software is reliable and defects-free.</div>
          </div>
        </div>

        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                Can you provide a brief overview of CodeAutomation’s development process?
              </div>

            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              CodeAutomation’s development process is structured and iterative, built around industry best practices. Here’s a simplified overview of our typical development lifecycle:

              Requirements Gathering: We work closely with our clients to gather detailed project requirements, ensuring a clear understanding of goals and expectations.
              Design: Our experienced designers create wireframes and prototypes to visualize the software’s user interface and functionality.
              Development: Our skilled developers write clean, maintainable code using best practices and relevant technologies.
              Testing: Rigorous testing is conducted at multiple stages, including unit testing, integration testing, and user acceptance testing (UAT).
              Deployment: We deploy the software to a production environment, ensuring a smooth transition from development to the live environment.
              Maintenance: Post-launch, we offer ongoing maintenance and support, addressing any issues, implementing updates, and optimizing performance.
              Throughout the process, CodeAutomation emphasizes transparent communication with our clients, offering regular updates and opportunities for feedback to ensure that the final product aligns with their vision and objectives.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingSix">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                How does CodeAutomation ensure the security of client data and intellectual property?
              </div>

            </button>
          </h2>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              CodeAutomation boasts a diverse and highly skilled team of developers and testers with expertise in various technologies and programming languages. Our specialization includes but is not limited to:

              Programming Languages: CodeAutomation is proficient in languages such as Java, Python, JavaScript, .NET, PHP, Ruby on Rails, and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              Frameworks and Tools: CodeAutomation leverages popular development frameworks and tools like Angular, Node.js, Vue.js, React Native, React.js, Spring Boot, Django, and others to accelerate development while maintaining code quality.
              Testing Technologies: Our testing experts are well-versed in various testing technologies and frameworks, including Selenium, Cypress, Playwright, Protractor, Katalon, Postman, Rest Assured, JUnit, JIRA, Appium, and many more, to ensure comprehensive test coverage and automation.
              CRM/CMS implementation and customization: CodeAutomation is proficient in languages such as Javascript, Aura, LWCs, Apex, Flows, Rest API, Java and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              AI/ML languages: We leverage our clients with AI/ML services and languages are: NumPy, SciPy, Pandas, PyTorch, matlab, Ruby on rails, Fortran, Golang, R language.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingSeven">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                Does CodeAutomation offer maintenance and support services after project completion?
              </div>

            </button>
          </h2>
          <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              CodeAutomation boasts a diverse and highly skilled team of developers and testers with expertise in various technologies and programming languages. Our specialization includes but is not limited to:

              Programming Languages: CodeAutomation is proficient in languages such as Java, Python, JavaScript, .NET, PHP, Ruby on Rails, and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              Frameworks and Tools: CodeAutomation leverages popular development frameworks and tools like Angular, Node.js, Vue.js, React Native, React.js, Spring Boot, Django, and others to accelerate development while maintaining code quality.
              Testing Technologies: Our testing experts are well-versed in various testing technologies and frameworks, including Selenium, Cypress, Playwright, Protractor, Katalon, Postman, Rest Assured, JUnit, JIRA, Appium, and many more, to ensure comprehensive test coverage and automation.
              CRM/CMS implementation and customization: CodeAutomation is proficient in languages such as Javascript, Aura, LWCs, Apex, Flows, Rest API, Java and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.
              AI/ML languages: We leverage our clients with AI/ML services and languages are: NumPy, SciPy, Pandas, PyTorch, matlab, Ruby on rails, Fortran, Golang, R language.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingEight">
            <button class="accordion-button collapsed px-22 py-42 pl-4 rounded-4 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className={styles.heading}>
                What is CodeAutomations pricing model and engagement process?
              </div>

            </button>
          </h2>
          <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              CodeAutomation’s pricing model and engagement process are flexible and tailored to each client’s unique requirements. We understand that every project is different, and we aim to provide a transparent and collaborative approach. Here’s an overview of our typical engagement process:

              Initial Consultation: We begin with an in-depth discussion to understand your project’s goals, scope, and specific requirements.
              Project Proposal: Following the consultation, we provide a detailed project proposal, including a breakdown of costs, timelines, and deliverables.
              Agreement: Upon mutual agreement on the proposal, we formalize the engagement with a contract that outlines roles, responsibilities, and terms.
              Development and Testing: The development phase begins with regular communication and updates to inform you of progress.
              Testing and Quality Assurance: Rigorous testing and quality assurance processes are carried out to ensure the final product meets your expectations.
              Deployment and Launch: We deploy the software to the production environment, ensuring a smooth transition to the live environment.
              Post-Launch Support: We provide ongoing support, maintenance, and updates as needed to ensure your software remains reliable and up-to-date.
              Our pricing structure can be based on various models, including fixed-price contracts or hourly rates, depending on your project’s needs and preferences. We are committed to transparency and work collaboratively with our clients to ensure a successful partnership.
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
