import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="OUR INNOVATIONS"
          text="Divine DevOps unlocks the path of many jobs,learning with animation,modern AR technologies and many more "
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">JOB OPPORUNITIES FOR DEAF</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Divine DevOps helps you to finding the jobs for deaf individuals
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <a href="https://www.indeed.com/career-advice/finding-a-job/jobs-deaf-hard-of-hearing" target="_blank" rel="noopener noreferrer">
    <Button>
      Find Jobs
    </Button>
  </a>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Learn from animated ISL videos</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Divine DevOps provide ISL animated videos which helps to enhance your knowledge. Try it now!
                </p>
                <a href="https://www.youtube.com/@deafenabledfoundation1117" target="_blank" rel="noopener noreferrer">
                <Button>
      Start Learning
    </Button>
  </a>
                
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Unlock AR technologies for ISL</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Divine DevOps offer AR technologies which enhance social Interaction,navigation assistance,communication tools and many more
                </p>
                
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                        
                      </div>
                      
                    </li>
                  ))}
                </ul>
                
                
              </div>
              <a href="https://talkpal.ai/how-to-use-augmented-reality-for-language-learning/" target="_blank" rel="noopener noreferrer">
                <Button>
      Check It Now
    </Button>
  </a>
  <div><br /></div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
