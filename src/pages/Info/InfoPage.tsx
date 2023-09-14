import { Link } from 'react-router-dom';

export const InfoPage = () => {
  return (
    <div>
      <div>Info page: the index component</div>
      <div>
        <ul>
          <li>
            <Link to='info-nested-1'>Nested 1</Link>
          </li>
          <li>
            <Link to='info-nested-2'>Nested 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
