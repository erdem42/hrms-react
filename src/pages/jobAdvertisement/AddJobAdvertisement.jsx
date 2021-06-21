import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Segment, Input, Dropdown } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobPositionService from "../../services/jobPositionService";
import WorkTimeTypeService from "../../services/workTimeTypeService";
import WorkTypeService from "../../services/workTypeService";
import '../../css/addJobAdvertisement.css'
import * as Yup from "yup";
import * as moment from "moment";

export default function AddJobAdvertisement() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let workTimeTypeService = new WorkTimeTypeService();
    let workTypeService = new WorkTypeService();
    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
    workTimeTypeService
      .getWorkTimeTypes()
      .then((result) => setWorkTimeTypes(result.data.data));
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const getJobPositions = jobPositions.map((position, index) => ({
    key: index,
    text: position.title,
    value: position.id,
  }));
  const getWorkTimeTypes = workTimeTypes.map((workTimeType, index) => ({
    key: index,
    text: workTimeType.timeType,
    value: workTimeType.id,
  }));
  const getWorkTypes = workTypes.map((workType, index) => ({
    key: index,
    text: workType.type,
    value: workType.id,
  }));

  const formik = useFormik({
    initialValues: {
      positionId: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      positionAmount: "",
      jobDescription: "",
      applicationDeadline: "",
      workTypeId: "",
      workTimeTypeId: "",
      userId: 7,
      releaseDate: moment().format("YYYY-MM-DD"),
    },
    validationSchema: Yup.object({
      positionId: Yup.number().required("İş pozisyonu bilgisi seçiniz!"),
      cityId: Yup.string().required("Şehir bilgisi seçiniz!"),
      positionAmount: Yup.number().required(
        "Alınacak eleman sayısı boş bırakılamaz!"
      ),
      jobDescription: Yup.string().required("Açıklama boş bırakılamaz!"),
      applicationDeadline: Yup.string().required(
        "Son başvuru tarihi boş bırakılamaz!"
      ),
      workTypeId: Yup.string().required("Çalışma tipi bilgisi seçiniz!"),
      workTimeTypeId: Yup.string().required(
        "Çalışma zamanı tipi bilgisi seçiniz!"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      let jobAdvertisement =
      
      {
        //sol taraftakiler jobAdvertisement eklerken gelen değişkenler, sağ taraftakiler ise initialValues kısmında belirlediklerimiz

        deadline: values.applicationDeadline,
        description: values.jobDescription,
        employerId: values.userId ,
        jobTitleId: values.positionId ,
        positionAmount: values.positionAmount,
        releaseDate: values.releaseDate,
        workTimeTypeId: values.workTimeTypeId ,
        workTypeId: values.workTypeId ,
        cityId: values.cityId ,

        
        minSalary: values.minSalary,
        maxSalary: values.maxSalary
      };
      console.log(jobAdvertisement);
      jobAdvertisementService
        .addJobAdvertisement(jobAdvertisement)
        .then((result) => console.log(result.data.message));
    },
  });

  return (
    <div>
      <Segment.Group>
        <Segment inverted>
          <h3 className="headerStyle">İş İlanı Ekle</h3>
        </Segment>
        <Segment>
          <form onSubmit={formik.handleSubmit}>
            <div
              style={{
                textAlign: "left",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              <div className="divStyle">
                <label>Şehir:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                    
                  }}
                  button
                  placeholder="Şehir Seçiniz..."
                  fluid
                  search
                  selection
                  id="cityId"
                  options={getCities}
                  onChange={(event, data) =>
                    formik.setFieldValue("cityId", data.value)
                  }
                  value={formik.values.cityId}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <p style={{ color: "red" }}>{formik.errors.cityId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>İş Pozisyonu:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="İş Pozisyonu Seçiniz..."
                  fluid
                  search
                  selection
                  id="positionId"
                  options={getJobPositions}
                  onChange={(event, data) =>
                    formik.setFieldValue("positionId", data.value)
                  }
                  value={formik.values.positionId}
                />
                {formik.errors.positionId && formik.touched.positionId && (
                  <p style={{ color: "red" }}>{formik.errors.positionId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Çalışma Tipi:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="Çalışma Tipini Seçiniz..."
                  fluid
                  search
                  selection
                  id="workTypeId"
                  options={getWorkTypes}
                  onChange={(event, data) =>
                    formik.setFieldValue("workTypeId", data.value)
                  }
                  value={formik.values.workTypeId}
                  required
                />
                {formik.errors.workTypeId && formik.touched.workTypeId && (
                  <p style={{ color: "red" }}>{formik.errors.workTypeId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Çalışma Zamanı Tipi:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="Çalışma Zamanı Tipini Seçiniz..."
                  fluid
                  search
                  selection
                  id="workTimeTypeId"
                  options={getWorkTimeTypes}
                  onChange={(event, data) =>
                    formik.setFieldValue("workTimeTypeId", data.value)
                  }
                  value={formik.values.workTimeTypeId}
                />
                {formik.errors.workTimeTypeId &&
                  formik.touched.workTimeTypeId && (
                    <p style={{ color: "red" }}>
                      {formik.errors.workTimeTypeId}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Minimum Maaş:</label>
                <Input
                  id="minSalary"
                  placeholder="Minimum Maaş..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.minSalary}
                ></Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Maksimum Maaş:</label>
                <Input
                  id="maxSalary"
                  placeholder="Maksimum Maaş..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.maxSalary}
                ></Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Alınacak Personel Sayısı:</label>
                <Input
                  id="positionAmount"
                  placeholder="Alınacak Personel Sayısı..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.positionAmount}
                ></Input>
                {formik.errors.positionAmount &&
                  formik.touched.positionAmount && (
                    <p style={{ color: "red" }}>
                      {formik.errors.positionAmount}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Son Başvuru Tarihi:</label>
                <Input
                  type="date"
                  id="applicationDeadline"
                  placeholder="Son Başvuru Tarihi..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.applicationDeadline}
                ></Input>
                {formik.errors.applicationDeadline &&
                  formik.touched.applicationDeadline && (
                    <p style={{ color: "red" }}>
                      {formik.errors.applicationDeadline}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Açıklama:</label>
                <Input
                  id="jobDescription"
                  placeholder="Açıklama..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.jobDescription}
                ></Input>
                {formik.errors.jobDescription &&
                  formik.touched.jobDescription && (
                    <p style={{ color: "red" }}>
                      {formik.errors.jobDescription}
                    </p>
                  )}
              </div>
            </div>
            <Button
              type="submit"
              style={{
                backgroundColor: "#780000",
                color: "white",
                marginBottom: "0.001em",
              }}
            >
              EKLE
            </Button>
          </form>
        </Segment>
      </Segment.Group>
    </div>
  );
}

/*
 export default function SignupForm() {
   // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>
   );
 };
 */
