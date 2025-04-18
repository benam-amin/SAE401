export function ChampTexte({id, label, type}) {
  return (
      <div className="input">
          <label htmlFor={id}>{label}</label>
          <input name={id} id={id} className="font13" type={type} placeholder={label}/>
      </div>
  );
}

export function ChampRadio({id, label, name}) {
  return (
      <div className="option">
          <input name={name} id={id} className="font13" type="radio"/>
          <label htmlFor={id}>{label}</label>
      </div>
  );
}

export function ChampCheckbox({id, label, name}) {
  return (
      <div className="option">
          <input name={name} id={id} className="font13" type="checkbox"/>
          <label htmlFor={id}>{label}</label>
      </div>
  );
}