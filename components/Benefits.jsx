import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  // Function to handle card click and navigate to different files based on id
  const handleCardClick = (id) => {
    console.log("Card clicked with ID: ${id}");
    switch (id) {
      case "0":
        console.log("Redirecting to /abc-to-isl/isl.html");
        window.location.href = '/abc-to-isl/isl.html'; // Ensure correct path
        break;
      case "1":
        console.log("Redirecting to /t-to-isl/index1.html");
        window.location.href = '/t-to-isl/index1.html'; // Ensure correct path
        break;
      case "2":
        console.log("Redirecting to /livecamera-to-isl/templates/index.html ");
        window.location.href = '/livecamera-to-isl/templates/index.html'; // Ensure correct path
        break;
        case "3":
          console.log("Redirecting to YouTube");
          window.location.href = 'https://youtu.be/k4L_06xXDfk'; // YouTube link
          break;      
      case "4":
      case "5":
        window.location.href = '#'; // Placeholder for other IDs
        break;
      default:
        break;
    }
  };
  

  
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Divine DevOps"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
              key={item.id}
              onClick={() => handleCardClick(item.id)} // Handle card click
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Use dangerouslySetInnerHTML to render HTML inside 'text' */}
                <p
                  className="body-2 mb-6 text-n-3"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>

                {/* Render additional content if it exists */}
                {item.additionalContent && (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.additionalContent }}
                  />
                )}
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;