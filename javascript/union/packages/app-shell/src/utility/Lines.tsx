const Lines = (props: { count: number }) => {
    return (
      <>
        {[...Array(props.count)].map((_, i) => (
          <div key={i} className={` pl-1 text-base hover:text-neutral-400`}>
            Line s {i}
          </div>
        ))}
      </>
    );
  };

  export {Lines}