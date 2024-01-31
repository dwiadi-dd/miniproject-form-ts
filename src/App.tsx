import { useState } from "react";
import logo from "./assets/FA_DIGICAMP_LOGO_WHITE.png";
import {
  RegsiterDataType,
  stepList,
  ListOfCity,
  ListOfProvinsi,
} from "./utils";
import Welcome from "./components/Welcome";
import Stepper from "./components/Stepper";

function App() {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [valid, setValid] = useState("");
  const [registerData, setRegisterData] = useState<RegsiterDataType>({
    fullname: "",
    email: "",
    dob: "2004-01-01",
    street: "",
    city: "",
    province: "banten",
    username: "",
    password: "",
  });

  const isFirstStep = step === 0;
  const isLastStep = step === stepList.length - 1;

  const next = () => {
    setStep((i) => {
      if (i >= stepList.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    if (isLastStep && valid.length >= 1) return;
    setIsSuccess(true);
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
        {isSuccess ? (
          <p className="mx-auto stepper-desc text-2xl font-semibold lg:pt-48 pt-8 h-[4em]">
            Registration Complete
          </p>
        ) : (
          <Stepper step={step} stepList={stepList} />
        )}
      </div>
      <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
        {isSuccess ? (
          <>
            <Welcome registerData={registerData} />
          </>
        ) : (
          <div className="step-form">
            <h1 className="form-title ">{stepList[step].title}</h1>
            <h3 className="form-desc">{stepList[step].desc}</h3>
            <form
              className="form-registration mt-10 grid gap-8"
              onSubmit={onSubmit}
            >
              {step === 0 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="fullname" className="label-input">
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
                      pattern=".{5,}"
                      title="Name Must be 4 Characters or longer"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="label-input">
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
                      title="please provide valid email adress"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob" className="label-input">
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
                      max="2006-01-01"
                      required
                    />
                    <p className="text-red-400">{"\u00A0"}</p>
                  </div>
                </>
              ) : step === 1 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="street" className="label-input">
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
                      pattern=".{10,}"
                      title="address street Must be 10 Characters or longer"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="province" className="label-input">
                      province
                    </label>
                    <select
                      className="input-form"
                      id="province"
                      name="province"
                      value={registerData.province as string}
                      onChange={(e) =>
                        setRegisterData((prev) => ({
                          ...prev,
                          province: e.target.value,
                        }))
                      }
                      onBlur={(e) =>
                        setRegisterData((prev) => ({
                          ...prev,
                          province: e.target.value,
                        }))
                      }
                      required
                    >
                      {ListOfProvinsi.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.provinsi}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city" className="label-input">
                      City
                    </label>
                    <select
                      className="input-form"
                      id="city"
                      name="city"
                      value={registerData.city as string}
                      onChange={(e) =>
                        setRegisterData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      onBlur={(e) =>
                        setRegisterData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      required
                    >
                      {ListOfCity[registerData.province]?.map((option) => (
                        <option value={option.kota}>{option.kota}</option>
                      ))}
                    </select>
                    <p className="text-red-400">{"\u00A0"}</p>
                  </div>
                </>
              ) : step === 2 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="username" className="label-input">
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
                      pattern=".{6,}"
                      title="username Must be 10 Characters or longer"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="label-input">
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
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="Must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reenter" className="label-input">
                      reenter password
                    </label>
                    <input
                      className="input-form"
                      type="password"
                      id="reenter"
                      name="reenter"
                      onBlur={(e) => {
                        e.target.value !== registerData.password
                          ? setValid("pass not valid")
                          : setValid("");
                      }}
                    />
                    <p className="text-red-400">
                      {valid.length >= 1 ? valid : "\u00A0"}
                    </p>
                  </div>
                </>
              ) : (
                <p>-</p>
              )}
              <div className="button-form-group ">
                <button
                  className="back-button"
                  onClick={back}
                  type="button"
                  disabled={isFirstStep}
                >
                  back
                </button>

                <button className="next-button">
                  {isLastStep ? "Finish" : "Next"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
