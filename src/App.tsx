import { useState } from "react";
import logo from "./assets/FA_DIGICAMP_LOGO_WHITE.png";

const stepList = [
  { id: 1, title: "personal information" },
  { id: 2, title: "address information" },
  { id: 3, title: "account information" },
];

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="bg-slate-700 w-full lg:w-1/3 text-white shadow-2xl flex flex-col">
        <header>
          <img
            src={logo}
            alt="logo digicamp"
            className="lg:w-[200px] w-[10em] pt-4 pl-4"
          />
        </header>
        <div className="stepper ">
          <h1 className="stepper-title">Step 1</h1>
          <h2 className="stepper-desc">
            please provide your personal information
          </h2>
          <ul className="mt-4 flex lg:flex-col flex-row gap-8 text-slate-400">
            {stepList.map((step) => (
              <li
                key={step.id}
                className="step-list"
                style={{ color: "white" }}
              >
                <p className=" step-number-actived">{step.id}</p>
                {step.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
        {step}
        <div className="step-form">
          {step === 1 ? (
            <>
              <h1 className="form-title ">personal information</h1>
              <h3 className="form-desc">
                Masukan alamat lengkap kamu tinggal.
              </h3>
              <form action="" className="form-registration mt-10 grid gap-8">
                <div className="form-group ">
                  <label htmlFor="fullname" className="text-xl">
                    Full Name
                  </label>
                  <input
                    className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                    type="text"
                    id="fullanme"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-xl">
                    Email
                  </label>
                  <input
                    className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullname" className="text-xl">
                    Date of Birth
                  </label>
                  <input
                    className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                    type="date"
                    id="fullanme"
                  />
                </div>
              </form>
            </>
          ) : step === 2 ? (
            <>
              {" "}
              <>
                <h1 className="form-title ">personal information</h1>
                <h3 className="form-desc">
                  Masukan alamat lengkap kamu tinggal.
                </h3>
                <form action="" className="form-registration mt-10 grid gap-8">
                  <div className="form-group ">
                    <label htmlFor="fullname" className="text-xl">
                      Full Name
                    </label>
                    <input
                      className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                      type="text"
                      id="fullanme"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-xl">
                      Email
                    </label>
                    <input
                      className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullname" className="text-xl">
                      Date of Birth
                    </label>
                    <input
                      className="border-2 border-slate-200 text-xl py-2 px-4 rounded-lg outline-none"
                      type="date"
                      id="fullanme"
                    />
                  </div>
                </form>
              </>
            </>
          ) : (
            <p>test</p>
          )}

          <div className="form-group flex flex-row justify-evenly text-xl pt-16 ">
            {step >= 2 ? (
              <button className="back-button" onClick={() => setStep(step - 1)}>
                back
              </button>
            ) : (
              <button
                className="text-slate-200"
                onClick={() => setStep(step - 1)}
                disabled
              >
                back
              </button>
            )}
            <button className="next-button" onClick={() => setStep(step + 1)}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
