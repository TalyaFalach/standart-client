import React from 'react'
import NavBarLoginComponent from '../../Components/NavBarLogin/NavBarLoginComponent'
import PageTitle from '../../Components/PageTitle/PageTitle'

const JobsPage = () => {
  return (
    <div>
      <NavBarLoginComponent />
      <PageTitle
        title="Job Offers"
        subTitle="The place to look for new employees, or a new job. Good Luck!"
      />
      <select defaultValue="Search">
        <option value="Search" disabled>
          Search
        </option>
        <option value="Job Search">Job Search</option>
        <option value="Job Offer">Job Offer</option>
      </select>
    </div>
  );
}

export default JobsPage