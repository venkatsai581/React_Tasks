import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="container">
      <h1 className="title">Employee Details</h1>

      <div className="card-wrapper">

        <Child
          name="Rahul"
          age={24}
          role="Frontend Developer"
          location="Hyderabad"
          skills="React, JavaScript, CSS"
        />

        <Child
          name="Priya"
          age={26}
          role="Backend Developer"
          location="Bangalore"
          skills="Java, Spring Boot, MySQL"
        />

        <Child
          name="Arjun"
          age={22}
          role="UI/UX Designer"
          location="Chennai"
          skills="Figma, Photoshop, Canva"
        />

        <Child
          name="Kumar"
          age={20}
          role="Cloud Engineer"
          location="Hyderabad"
          skills="AWS, Azure, Docker"
        />

        <Child
          name="Naveen"
          age={28}
          role="Java full Stack Developer"
          location="Delhi"
          skills="Java, Sql, Spring"
        />

        <Child
          name="KamalRaj"
          age={20}
          role="Python full Stack Developer"
          location="Mumbai"
          skills="Pyhton, Django, Flask"
        />

        <Child
          name="Raj"
          age={21}
          role="Python full Stack Developer"
          location="Mumbai"
          skills="Pyhton, Django, Flask"
        />

        <Child
          name="Praveen"
          age={25}
          role=".Net Developer"
          location="Mumbai"
          skills=".Net, Sql, Flask"
        />

        <Child
          name="Krishna"
          age={29}
          role="Software Developer"
          location="Goa"
          skills="Pyhton, Django, Flask"
        />

        <Child
          name="Sai"
          age={26}
          role="System Engineer"
          location="Mumbai"
          skills="Excel, Power BI, Linux"
        />
      </div>
    </div>
  );
}

export default Parent;