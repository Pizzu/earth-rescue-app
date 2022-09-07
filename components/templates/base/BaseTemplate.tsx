export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="text-red-500 text-2xl">{sampleTextProp}</div>;
};

export default BaseTemplate;
