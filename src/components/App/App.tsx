import { useEffect, useState } from 'react';
import {
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
  Route,
} from 'react-router-dom';
import { Contexts } from '../../contexts/Contexts';
import { TestSite } from '../../types/types';
import { GeneralLayout } from '../../layouts';
import { DashboardPage } from '../../pages/DashboardPage/index';
import { FinalizePage } from '../../pages/FinalizePage/index';
import { ResultsPage } from '../../pages/ResultsPage/index';
import { TestsAndSites } from '../../utils/Mockup';

export const App = () => {
  const [joinedData, setJoinedData] = useState<TestSite[]>([]);
  const [dataLength, setDataLength] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const [direction, setDirection] = useState<string>('');
  const [sortedField, setSortedField] = useState<string>('');
  const [testToShow, setTestToShow] = useState<TestSite | undefined>(
    JSON.parse(localStorage.getItem('testToShow') || '{}') ||
      ({} as TestSite | undefined)
  );

  //modifing received data
  useEffect(() => {
    const data: TestSite[] = TestsAndSites.map((test: TestSite) => ({
      ...test,
      url: test.url.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, ''),
    }));
    setJoinedData(data);
  }, [setJoinedData]);

  // test finding function
  function findTest(id: string): TestSite | undefined {
    const data: TestSite | undefined = joinedData?.find(
      (el) => el.id.toString() === id
    );
    setTestToShow(data);
    localStorage.setItem('testToShow', JSON.stringify(data));
    return;
  }

  // describing routes
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route element={<GeneralLayout />}>
        <Route index element={<DashboardPage />} />
        <Route element={<FinalizePage />} path={`finalize/${testToShow?.id}`} />
        <Route element={<ResultsPage />} path={`results/${testToShow?.id}`} />
      </Route>
    </Route>
  );
  // creating routes
  const router = createHashRouter(routes);
  return (
    <Contexts
      joinedData={joinedData}
      setJoinedData={setJoinedData}
      dataLength={dataLength}
      setDataLength={setDataLength}
      searchText={searchText}
      setSearchText={setSearchText}
      findTest={findTest}
      testToShow={testToShow}
      setTestToShow={setTestToShow}
      direction={direction}
      setDirection={setDirection}
      sortedField={sortedField}
      setSortedField={setSortedField}
    >
      <RouterProvider router={router} />
    </Contexts>
  );
};
