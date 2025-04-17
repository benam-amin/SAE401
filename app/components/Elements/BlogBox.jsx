import '../../style/css/blogbox.css';

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button className="blog-box-btn animate pointer" onClick={action ? () => action() : null}>
      <div className="blog-box">
        <h3 className="font20 extraBold darkColor">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </div>
    </button>
  );
}


