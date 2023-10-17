const getAllMeetups = async (req, res) => {
  try {
    const response = await fetch(
      "https://first-react-app-3eb72-default-rtdb.firebaseio.com/meetup.json"
    );
    const meetups = await response.json();
    res.status(200).json({ status: "success", body: { meetups } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = { getAllMeetups };
