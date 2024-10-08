import { useState, useEffect } from "react";
import PackageCard from "../../components/User/PackageCard";
import { toast } from "react-toastify";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
// import Datepicker from "react-tailwindcss-datepicker";
import SelectiveMan from "../../assets/SelectiveMan.svg";
import DatePicker from "../../components/DatePicker.jsx";
const SelectPackage = () => {
  const [date, setDate] = useState();
  const [allPackage, setPackages] = useState([]);
  const userId = auth.currentUser.uid;
  const [formData, setFormData] = useState({
    time: 1,
    date: "",
    packageId: "",
    UPIRefNo: "",
  });

  useEffect(() => {
    setFormData((formData) => ({ ...formData, date: date?.toString() }));
  }, [date]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("formData:", formData);
      await addDoc(collection(db, "Bills"), {
        userId: userId,
        time: formData.time,
        date: formData.date,
        packageId: formData.packageId,
        UPIRefNo: formData.UPIRefNo,
      });
      toast.success("Package selected successfully!!", {
        position: "top-center",
      });
      setFormData({
        time: 1,
        date: "",
        packageId: "",
        UPIRefNo: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePackageChange = (id) => {
    setFormData({
      ...formData,
      packageId: id,
    });
  };
  const handleUPI = (value) => {
    setFormData({
      ...formData,
      UPIRefNo: value,
    });
  };

  const getPackages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Packages"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPackages(data);
    } catch (err) {
      toast.error(err.message, { position: "top-center" });
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <>
      <div className="flex flex-row  gap-2 justify-center items-center px-5 mt-10">
        <div className="w-full max-w-[700px] lg:w-[600px]">
          <form
            action=""
            className=" p-5 border-2 bg-slate-200 border-gray-500 rounded shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-5 p-1">
              <div className="mb-2">
                <label
                  htmlFor="datepicker"
                  className="block text-gray-600 mb-2 ml-2"
                >
                  Select a date
                </label>
                <DatePicker date={date} setDate={setDate} />
              </div>
              <div className="">
                <label
                  htmlFor="monthSelect"
                  className="block text-gray-600 mb-2 ml-2"
                >
                  time:
                </label>
                <select
                  name="time"
                  id="monthSelect"
                  className="bg-slate-50 text-gray-600 px-5 py-2 rounded-md h-10 hover:ring w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                >
                  <option value="1">1 month</option>
                  <option value="3">3 month</option>
                  <option value="5">5 month</option>
                  <option value="12">12 month</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-rows-1 grid-flow-col gap-3 w-full overflow-x-auto justify-items-center mb-5">
                {allPackage.map((Package) => {
                  return (
                    <PackageCard
                      Package={Package}
                      key={Package.id}
                      handlePackageChange={handlePackageChange}
                      formData={formData}
                    />
                  );
                })}
              </div>
            </div>
            <div className="text-gray-600 w-full">
              <label htmlFor="" className="block m-1">
                UPIRefNo:
              </label>
              <input
                type="text"
                className="block border px-3 py-2 rounded  mb-3 hover:ring-2 w-full"
                value={formData.UPIRefNo}
                required
                onChange={(e) => {
                  handleUPI(e.target.value);
                }}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded w-full mb-5">
              submit
            </button>
          </form>
        </div>
        <div className="hidden justify-center items-center px-5 lg:flex">
          <img
            src={SelectiveMan}
            alt="not found"
            className="lg:w-[500px] xl:w-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default SelectPackage;
