import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
     <NavBar/>
     <div className='flex justify-center items-center p-4'>

        <div className='min-w-1/5'>
            <img src="/college_1.jpg" alt="" />
            <img src="/college_2.jpg" alt="" />
            <img src="/college_3.jpg" alt="" />
        </div>
        <div className='justify-center flex flex-col items-center space-y-15'>
            <h1 className='text-2xl font-bold'>About JITS</h1>
            <p>Jyothishmathi Institute of Technology and Science began its journey of excellence in the year 1997 as a self-financial Engineering college under Shalini Vidya Samithi, Karimnagar with a vision of providing technical education to the rural students by our esteemed chairman Sri. Juvvadi Sagar Rao Garu. JITS is approved by the All India Council for Technical Education (AICTE), New Delhi and is affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad.</p>

<p>Jyothishmathi has made meteoric progress during the last 22 years in teaching learning process and thrived into one of the top b.tech colleges in Telangana State. The management of Jyothishmathi is zestful and enlightened. It believes in providing a quality and holistic engineering education through a combination of experienced faculty, innovative programs & course work, industry and institute collaboration in providing research and employment opportunities on campus.</p>

<p>Jyothishmathi is driven by a brilliant team of faculty who contribute to an unparalleled reputation for balancing excellence in their fields with a dedication to their students. Many students secured University ranks bringing laurels to the institution. This institution is the most preferred choice of students, parents, faculty and industry and proved itself as a rolemodel in Technical Education.</p>
        </div>
     </div>
    </div>
  )
}

export default About
