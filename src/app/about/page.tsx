import Link from "next/link"
import Image from "next/image"
import mountainImg from "@/assets/images/about/mountain.JPG"

export default function AboutPage() {
  return (
    <>
      {/* Container for About section */}
      <div className="w-full px-8">
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with resume */}
            <div className="flex flex-col items-start">
              <Link
                href="/Xueshan_Peng_Resume_08222025.pdf"
                download
                className="text-blue-600 hover:text-blue-800 underline text-lg md:text-xl font-light"
              >
                Get My Resume
              </Link>
            </div>

            {/* Right column with text content (2/3) */}
            <div className="space-y-6 text-lg md:text-xl font-light md:col-span-2">
              <p>Hey there,</p>

              <p>I&apos;m Kevin. I&apos;m passionate about building elegant analytics solutions to help organizations solve complex business problems with clarity and impact.</p>

              <p>I&apos;m currently working on building forecasting and contemporaneous models of housing market dynamics at <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">John Burns Research and Consulting</a>.</p>

              <p>My approach to analytics is pragmatic – choosing the <strong className="font-medium">most effective</strong>, and often the simplest, method that <strong className="font-medium">solves the problem</strong> and <strong className="font-medium">speaks to the demand of cross-functional teams</strong>.</p>

              <p>
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">
                  Explore my projects here.
                </Link>
              </p>

              <p>Let&apos;s chat! – <a href="mailto:kevinpeng2025@gmail.com" className="text-blue-600 hover:text-blue-800">kevinpeng2025@gmail.com</a></p>

              <p>Outside of work, I like to spend my time playing <Link href="/music" className="text-blue-600 hover:text-blue-800">music</Link>, playing tennis, taking <Link href="/gallery" className="text-blue-600 hover:text-blue-800">photos</Link>, watching films, and cooking good food to share with friends.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Mountain Banner */}
      <div className="hidden min-[600px]:block w-full mb-20">
        <Image
          src={mountainImg}
          alt="Mountain landscape"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Container for remaining sections */}
      <div className="w-full px-8">
        {/* Skills Section */}
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-[#183c34]">SKILLS</h2>
            </div>

            {/* Right column with skills content (2/3) */}
            <div className="space-y-4 text-lg md:text-xl font-light md:col-span-2">
              <div>
                <h3 className="font-medium">Programming & Tools</h3>
                <p>Python (NumPy, pandas, scikit-learn, Dash) · R · SQL · Gurobi</p>
                <p>Jupyter Notebooks · Git · Tableau · Power BI · Advanced Excel</p>
              </div>

              <div>
                <h3 className="font-medium">Statistical & Machine Learning Methods</h3>
                <p>Linear & Logistic Regression · Classification · Clustering · Ensemble Methods</p>
                <p>Feature Engineering · Regularization (L1, L2) · Wrapper Methods</p>
              </div>

              <div>
                <h3 className="font-medium">Causal Inference & Experimental Design</h3>
                <p>A/B Testing · Difference-in-Differences (DiD) · Regression Discontinuity (RDD) · Instrumental Variables (IV) · Panel Data Analysis</p>
              </div>

              <div>
                <h3 className="font-medium">AI & Automation Workflows</h3>
                <p>OpenAI APIs (File Search, Thread) · Prompt Engineering · JSON Parsing · PDF Extraction · Concurrent Processing · Python Automation</p>
              </div>

              <div>
                <h3 className="font-medium">Data Science Foundations</h3>
                <p>Statistics · Machine Learning · Causal Inference · Optimization · Data Management · Data Visualization</p>
              </div>

              <div>
                <h3 className="font-medium">Applied Analytics</h3>
                <p>Customer Analytics · Operations Analytics · Competitive Analytics</p>
              </div>

              <div>
                <h3 className="font-medium">Time Series & Forecasting</h3>
                <p>ARIMA · SARIMA · Exponential Smoothing · STL Decomposition · VAR · VECM · Forecasting & Backtesting · Time Series Feature Engineering · Cross-Correlation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-[#183c34]">EDUCATION</h2>
            </div>

            {/* Right column with education content (2/3) */}
            <div className="space-y-4 text-lg md:text-xl font-light md:col-span-2">
              <div>
                <h3 className="font-medium">UCLA Anderson School of Management</h3>
                <p className="italic">Master of Science in Business Analytics</p>
              </div>

              <div>
                <h3 className="font-medium">University of California, San Diego</h3>
                <p className="italic">B.S. in Mathematics–Economics, Minor in Music</p>
              </div>

              <div>
                <h3 className="font-medium">Shanghai High School International Division</h3>
                <p className="italic">High School Diploma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-[#183c34]">WORK EXPERIENCE</h2>
            </div>

            {/* Right column with work experience content (2/3) */}
            <div className="space-y-2 text-lg md:text-xl font-light md:col-span-2">
              <div>
                <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer">
                  Data Scientist @ <span className="text-blue-600 hover:text-blue-800">John Burns Research and Consulting</span>
                </a>
              </div>

              <div>
                <a href="https://www.anderson.ucla.edu/about/centers/impactanderson" target="_blank" rel="noopener noreferrer">
                  Data Scientist @ <span className="text-blue-600 hover:text-blue-800">UCLA Anderson Center for Impact</span>
                </a>
              </div>

              <div>
                <a href="https://centerforcommunityenergy.org/" target="_blank" rel="noopener noreferrer">
                  Data Scientist @ <span className="text-blue-600 hover:text-blue-800">Center for Community Energy</span>
                </a>
              </div>

              <div>
                <a href="https://www.sageautomotiveinteriors.com/" target="_blank" rel="noopener noreferrer">
                  Business Analyst @ <span className="text-blue-600 hover:text-blue-800">Sage Automotive Interiors</span>
                </a>
              </div>

              <div>
                <a href="https://www.richlandcap.com/#banner" target="_blank" rel="noopener noreferrer">
                  Analyst @ <span className="text-blue-600 hover:text-blue-800">Richland Capital</span>
                </a>
              </div>

              <div>
                <a href="https://www.zurich.com/" target="_blank" rel="noopener noreferrer">
                  Underwriter @ <span className="text-blue-600 hover:text-blue-800">Zurich Insurance Group</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Side Quests Section */}
        <div className="max-w-6xl mx-auto pb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-[#183c34]">SIDE QUESTS</h2>
            </div>

            {/* Right column with side quests content (2/3) */}
            <div className="space-y-2 text-lg md:text-xl font-light md:col-span-2">
              <div>
                <span className="font-medium">Global Finalist & National Second Place</span>, <span className="italic">KWHS Investment Competition</span>
              </div>

              <div>
                <span className="font-medium">Lead Editor & Co-Producer</span>, <span className="italic">Stallions Basketball Team Documentary</span>
              </div>

              <div>
                <span className="font-medium">National Finalist</span>, <span className="italic">Harvard China Thinks Big</span>
              </div>

              <div>
                <span className="font-medium">Guest Lecturer</span>, <span className="italic">Jincheng Reading Club</span>
              </div>

              <div>
                <span className="font-medium">Online Tutor</span>, <span className="italic">Shaonianpai Project (for socioeconomically disadvantaged students)</span>
              </div>

              <div>
                <span className="font-medium">Elderly Care Volunteer</span>, <span className="italic">Webster House Health Center</span>
              </div>

              <div>
                <span className="font-medium">Piano Classification: PD</span>, <span className="italic">ACM National Piano Playing Auditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}