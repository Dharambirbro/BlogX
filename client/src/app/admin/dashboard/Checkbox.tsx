type dataProps = {
  data: {
    value: string;
  }[];
  name: string;
};

const Checkbox = ({ data, name }: dataProps) => {
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <input type="checkbox" name={name} value={item.value} />
          <label htmlFor="python">{item.value}</label>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
