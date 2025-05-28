import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Dipal Lakhani</h1>
        <p className="text-lg text-gray-600">
          Construction Estimator | PMP Certified | Roofing & Cladding Specialist
        </p>
        <p className="italic text-blue-500">Built to Shield. Designed to Shine.</p>
        <div className="text-sm text-gray-500">Toronto, ON · dipallakhani8@gmail.com · 647-936-4704</div>
      </header>

      {/* Profile Photo */}
      <div className="flex justify-center">
        <img
          src="/images/dipal_profile_resized.png"
          alt="Dipal Lakhani"
          className="rounded-full w-40 h-40 object-cover border-4 border-gray-200"
        />
      </div>

      {/* About Me */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I’m a detail-oriented construction estimator with over 4 years of
          experience in residential and commercial roofing and cladding. PMP
          certified and skilled in estimation, tendering, and project
          coordination, I bring accuracy, speed, and clarity to every job I take
          on.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Estimation & Takeoffs</h3>
            <ul className="list-disc list-inside">
              <li>Bluebeam Revu</li>
              <li>Planswift</li>
              <li>On-Screen Takeoff</li>
              <li>Advanced Excel</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Project Management</h3>
            <ul className="list-disc list-inside">
              <li>PMP Certified</li>
              <li>MS Project</li>
              <li>Primavera P6</li>
              <li>Change Order Control</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Roofing & Cladding Systems</h3>
            <ul className="list-disc list-inside">
              <li>TPO, EPDM, Torch-on</li>
              <li>ACM panels, metal siding</li>
              <li>Soffit/Fascia</li>
              <li>Custom Flashing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Soft Skills</h3>
            <ul className="list-disc list-inside">
              <li>Client Communication</li>
              <li>Team Coordination</li>
              <li>Deadline Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "789c6a9c-8764-4cb4-8a78-f850934e096a.png",
            "Project Gallery - Forma Steel.jpg",
            "78cf2d3a-50a4-422d-85c0-ec1df056eb54.png",
            "2e08c2fa-abed-4503-9594-4e1bd8d80eb0.png",
            "45a2a78f-9e2b-4572-a17a-4e34acd6ed1e.png",
            "df2952b9-d813-4225-a067-eebef417116f.png"
          ].map((file, index) => (
            <div key={index} className="border rounded-md overflow-hidden shadow-sm">
              <img
                src={`/images/${file}`}
                alt={`Project ${index + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Project {index + 1}</h3>
                <p className="text-sm text-gray-600">Completed as Estimator or Coordinator in various roofing or cladding scopes.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications & Education</h2>
        <ul className="list-disc list-inside">
          <li>PMP – Project Management Institute, 2024</li>
          <li>Construction Project Management – Lambton College</li>
          <li>WHMIS & Working at Heights</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>
          Feel free to reach out for collaborations, contract roles, or project opportunities.
        </p>
        <div className="text-sm text-gray-600">
          📧 dipallakhani8@gmail.com<br />
          📱 647-936-4704<br />
          🌐 LinkedIn: <a href="https://www.linkedin.com/in/dipal-lakhani-a43427236" className="text-blue-600 underline">linkedin.com/in/dipal-lakhani-a43427236</a>
        </div>
      </section>
    </div>
  );
}
