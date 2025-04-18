export function ChampTexte({id, label, type}) {
    return (
      <div className="input" >
        <label for={id}>{label}</label>
        <input name={id} className="font13" type={type} placeholder={label}/>
      </div>
    );
  }

  export function ChampRadio({id, label}) {
    return (
      <div className="input_autre">
        <label for={id}>{label}</label>
        <input name={id} className="font13" type="radio"/>
      </div>
    );
  }

  export function ChampCheckbox({id, label}) {
    return (
      <div className="input_autre">
        <label for={id}>{label}</label>
        <input name={id} className="font13" type="checkbox"/>
      </div>
    );
  }

