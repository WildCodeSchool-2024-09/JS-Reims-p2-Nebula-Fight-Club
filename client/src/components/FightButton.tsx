function click() {
  alert("Make your team, avaible soon");
}

const FightButton = () => {
  return (
    <div className="Fight">
      <button type="button" onClick={click}>
        Ready to Rumble ?!
      </button>
    </div>
  );
};

export default FightButton;
