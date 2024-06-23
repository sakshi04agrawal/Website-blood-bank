import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
document.body.style.background="url('https://res.cloudinary.com/dfxbpcwoq/image/upload/v1719144492/ar8hhcoz6m7k9m5asv1w.jpg')";
document.body.style.height = '100vh';
document.body.style.margin = '0';

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The Blood Bank portal is your comprehensive hub for managing and coordinating blood donations. Our mission is to ensure a reliable and safe supply of blood for those in need. Whether you are a donor, a recipient, or a healthcare professional, our platform provides the tools and information necessary to support this life-saving process.
          </p>
          <h3>As an administrator, you can:</h3>
          <ul>
            <li><b>Manage Donor Information:</b> Update donor profiles and track their donation history.</li>
            <li><b>Monitor Inventory:</b> Keep an eye on blood stock levels to ensure a balanced supply.</li>
            <li><b>Generate Reports:</b> Access detailed reports and analytics to make data-driven decisions.</li>
          </ul>
      
        <h3>As a donor or oragnisation or hospital, you can:</h3>
        <ul>
          <li><b>View Donation History:</b> Access records of your past donations with date and time.</li>
          <li><b>Patient Tracking:</b> Monitor and manage patient needs and blood transfusion records.</li>
          <li><b>Track Eligibility:</b> Check when you are eligible to donate again.</li>
        </ul>
        <p>


        </p>
        <p> We prioritize your data security and privacy, ensuring all your information is protected.</p>
        <h4>Thank you for being a part of the Blood Bank community. Together, we can save lives, one donation at a time.</h4>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
