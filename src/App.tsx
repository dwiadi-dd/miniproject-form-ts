import { useState } from "react";
import logo from "./assets/FA_DIGICAMP_LOGO_WHITE.png";
import { StepListType, RegsiterDataType, stepList } from "./utils";
import Welcome from "./components/Welcome";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Stepper = ({
  step,
  stepList,
}: {
  step: number;
  stepList: StepListType;
}) => {
  return (
    <div className="stepper ">
      <h1 className="stepper-title">Step {step}</h1>
      <h2 className="stepper-desc">{stepList[step - 1].alt}</h2>
      <ul className="mt-4 flex lg:flex-col flex-row gap-8 text-slate-400">
        {stepList.map((item) => (
          <li
            key={item.id}
            className="step-list"
            style={step >= item.id ? { color: "white" } : { color: "gray" }}
          >
            <p
              className=" step-number-actived"
              style={
                step >= item.id
                  ? { borderColor: "white" }
                  : { borderColor: "gray" }
              }
            >
              {item.id}
            </p>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [step, setStep] = useState(1);
  
  const [registerData, setRegisterData] = useState<RegsiterDataType>({
    fullname: "Morgan Premier",
    email: "morgan@email.com",
    dob: "24/01/2012",
    street: "the fourth avenue, gillian hill, sukoharjo",
    city: "wonosobo",
    province: "jawa barat",
    username: "test",
    password: "test",
  });

  function next() {
    setStep((i) => {
      return i + 1;
    });
  }

  function back() {
    setStep((i) => {
      if (i <= 1) return i;
      return i - 1;
    });
  }
  const isFirstStep = step === 1;
  const isLastStep = step === 3;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(JSON.stringify(registerData));
  };
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
        <Stepper step={step} stepList={stepList} />
      </div>
      <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
        <div className="step-form">
          {JSON.stringify(registerData)}
          <h1 className="form-title ">{stepList[step - 1].title}</h1>
          <h3 className="form-desc">{stepList[step - 1].desc}</h3>
          <form
            className="form-registration mt-10 grid gap-8"
            onSubmit={onSubmit}
          >
            {step === 1 ? (
              <>
                <div className="form-group ">
                  <label htmlFor="fullname" className="text-xl">
                    Full Name
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="fullanme"
                    name="fullname"
                    value={registerData.fullname as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        fullname: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-xl">
                    Email
                  </label>
                  <input
                    className="input-form"
                    type="email"
                    id="email"
                    name="email"
                    value={registerData.email as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob" className="text-xl">
                    Date of Birth
                  </label>
                  <input
                    className="input-form"
                    type="date"
                    id="dob"
                    name="dob"
                    value={registerData.dob as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div className="form-group ">
                  <label htmlFor="street" className="text-xl">
                    street address
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="street"
                    name="street"
                    value={registerData.street as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        street: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city" className="text-xl">
                    city
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="city"
                    value={registerData.city as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="province" className="text-xl">
                    province
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="province"
                    name="province"
                    value={registerData.province as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        province: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </>
            ) : step === 3 ? (
              <>
                <div className="form-group ">
                  <label htmlFor="username" className="text-xl">
                    username
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="username"
                    name="username"
                    value={registerData.username as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-xl">
                    password
                  </label>
                  <input
                    className="input-form"
                    type="password"
                    id="password"
                    value={registerData.password as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                  <div className="form-group">
                  <label htmlFor="password" className="text-xl">
                    reenter password
                  </label>
                  <input
                    className="input-form"
                    type="password"
                    id="password"
                    value={registerData.password as string}
                    onChange={(e) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <Welcome registerData={registerData} />
              </>
            )}

            <div className="button-form-group ">
              {step}

              <button
                className="back-button"
                onClick={back}
                disabled={isFirstStep}
              >
                Back
              </button>

              <button className="next-button">
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
