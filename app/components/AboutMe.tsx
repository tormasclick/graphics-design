import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center mb-6">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-xl mb-4">
          I'm Martin Ngungu Kioko, a passionate graphics designer with a keen eye for detail and a love for creative expression. 
          My journey in design has equipped me with the skills to create visually appealing and effective designs that communicate messages effectively.
        </p>
      </div>
      <div className="mb-8">
        <img 
          src="/images/aboutme/picture.jpeg" 
          alt="Profile Picture" 
          className="rounded-full h-48 w-48 object-cover mx-auto"
        />
      </div>
      <div className="max-w-2xl text-center">
        <p className="text-lg">
          I believe that good design is not just about aesthetics; it's about creating experiences that resonate with people. 
          I'm excited to collaborate and bring your ideas to life through innovative design solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;