import { useState } from "react";

interface AboutProps {
  person: string;
}

const About = (props: AboutProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>
        This is about {props.person} and {count}{" "}
      </p>
      <button onClick={() => setCount(count + 1)}>Decrement</button>
      <button onClick={() => setCount(count - 1)}>Increment</button>
    </div>
  );
};

export default About;
