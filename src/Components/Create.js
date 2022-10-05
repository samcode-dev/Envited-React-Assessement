import React, { useContext} from "react";
import "../Assets/Css/create.css";
import { AiOutlineCamera } from "react-icons/ai";
import EnvitedContext from "../Context/envitedContext";
import { Link, useNavigate } from "react-router-dom";


const Create = () => {
  const navigate = useNavigate();


  const { file, setFile, events, setEvents } = useContext(EnvitedContext);


  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const onChangeEvents = (e) => {
    console.log(e.target.value);
    setEvents({
      ...events,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("image", file);
    localStorage.setItem("number", 1);

    navigate("/event")
  };

  return (
    <div className="create-cont">
      <Link to="/">
        <h4>Cancel</h4>
      </Link>
      <div className="main-cont">
        <div className="first">
          <h1 className="first-text">Create Your Event</h1>
          <div
            style={{
              backgroundImage:
                file?.length > 0 ? `url(${file})` : "url(/fileUpload.png)",
            }}
            className="upload"
          >
            <label htmlFor="file-upload" className="custom-file-upload">
              <AiOutlineCamera />
              <h3>Choose a photo</h3>
              <input onChange={handleChange} id="file-upload" type="file" />
            </label>
          </div>
        </div>

        <form onSubmit={onSubmit} className="forms">
        <h1 className="second-text">Create Your Event</h1>
          <div className="text-input-cont">
            <label htmlFor="event-name">🎉 Event name</label>
            <input
              placeholder="Event name"
              value={events.eventName || ""}
              onChange={onChangeEvents}
              name="eventName"
              required
              id="event-name"
              type="text"
            />
          </div>
          <div className="text-input-cont">
            <label htmlFor="eventStart">🗓 It starts at</label>
            <input
              value={events.eventStart}
              onChange={onChangeEvents}
              name="eventStart"
              placeholder="ok"
              required
              id="event-name"
              type="datetime-local"
            />
          </div>
          <div className="text-input-cont">
            <label htmlFor="eventEnds">🏁 It ends at </label>
            <input
              required
              value={events.eventEnds}
              onChange={onChangeEvents}
              name="eventEnds"
              id="event-name"
              type="datetime-local"
            />
          </div>
          <div className="text-input-cont">
            <label htmlFor="eventHappening">📍 It’s happening at </label>
            <input
              required
              value={events.eventHappening}
              onChange={onChangeEvents}
              name="eventHappening"
              placeholder="Location"
              id="event-name"
              type="text"
            />
          </div>
          <div className="text-input-cont">
            <label htmlFor="eventHostName">👤 Host name </label>
            <input
              required
              value={events.eventHostName}
              onChange={onChangeEvents}
              name="eventHostName"
              placeholder="Host name"
              id="event-name"
              type="text"
            />
          </div>
          {/* <div className="text-input-cont">
            <label htmlFor="event-name">✏️ Description <span>(optional)</span></label>
            <input value={events.eventDes} onChange={onChangeEvents} name="eventDes" id="event-name" type="text" />
          </div> */}

          <button type="submit" className="home-btn">
            <h1>🎉 Next</h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
