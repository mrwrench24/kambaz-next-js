import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1" className="wd-dashboard-course-link">
            <Image
              src="/images/webdev.png"
              width={200}
              height={150}
              alt="Web Development"
            />
            <div>
              <h5> CS4550 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2" className="wd-dashboard-course-link">
            <Image
              src="/images/swe.png"
              width={200}
              height={150}
              alt="Software Engineering Diagram"
            />
            <div>
              <h5> CS4530 </h5>
              <p className="wd-dashboard-course-title">Software Engineering</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3" className="wd-dashboard-course-link">
            <Image
              src="/images/mmethods.png"
              width={200}
              height={150}
              alt="A matrix"
            />
            <div>
              <h5> MATH4570 </h5>
              <p className="wd-dashboard-course-title">
                Matrix Methods for Data Analysis & Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4" className="wd-dashboard-course-link">
            <Image
              src="/images/neuralnets.png"
              width={200}
              height={150}
              alt="A Neural Network"
            />
            <div>
              <h5> DS4440 </h5>
              <p className="wd-dashboard-course-title">
                Practical Neural Networks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/5" className="wd-dashboard-course-link">
            <Image
              src="/images/linalg.jpeg"
              width={200}
              height={150}
              alt="Lots of linear algebra"
            />
            <div>
              <h5> MATH2331 </h5>
              <p className="wd-dashboard-course-title">Linear Algebra</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/6" className="wd-dashboard-course-link">
            <Image
              src="/images/ml2.jpeg"
              width={200}
              height={150}
              alt="A robot"
            />
            <div>
              <h5> DS4420 </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning & Data Mining 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/7" className="wd-dashboard-course-link">
            <Image
              src="/images/ml1.jpeg"
              width={200}
              height={150}
              alt="Machine Interaction"
            />
            <div>
              <h5> DS4400 </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning & Data Mining 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
