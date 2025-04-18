export function ChampTexte({id, label, type}) {
  return (
      <div className="input">
          <label htmlFor={id}>{label}</label>
          <input name={id} id={id} className="font13" type={type} placeholder={label}/>
      </div>
  );
}

export function ChampRadio({ id, name, label, onChange, checked }) {
  return (
    <label htmlFor={id} style={{ display: "flex", alignItems: "center" }}>
      {/* Bouton radio */}
      <input
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      {/* Texte du label à droite */}
      <span>{label}</span>
    </label>
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