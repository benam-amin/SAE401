export function ChampTexte({id, label, type}) {
    return (
      <div>
        <label for={id}>{label}</label>
        <input name={id} className="font13" type={type} placeholder={label}/>
      </div>
    );
  }

  export function ChampRadio({id, label}) {
    return (
      <div>
        <label for={id}>{label}</label>
        <input name={id} className="font13" type="radio"/>
      </div>
    );
  }


