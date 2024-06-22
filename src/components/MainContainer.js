import { ButtonList } from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer = () => {
  return (
    <div className=' ml-5 p-48'>
      <div className='flex flex-wrap overflow-x-scroll scrollbar-hide   '>
        <ButtonList />
      </div>
      <VedioContainer />
    </div>
  );
};

export default MainContainer;
