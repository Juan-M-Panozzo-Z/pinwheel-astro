const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const SerIcon = <img src={`/icons/${item.icon}.svg`} alt={item.icon}/>;
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
          >
            <div>
              <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <span className="icon mt-4">
            {SerIcon}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
