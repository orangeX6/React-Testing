[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>\n    Count: {count}\n  </button>\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"},{"content":"\r\n\r\nfunction ColorList() {\r\n  return (\r\n    <ul>\r\n      <li>Red</li>\r\n      <li>Blue</li>\r\n      <li>Green</li>\r\n    </ul>\r\n\r\n  )\r\n}\r\n\r\nrender(<ColorList/>)","type":"code","id":"t1s0w"},{"content":"function fakeFetchColors() {\n  return Promise.resolve(['red', 'green', 'blue']);\n}\n\nfunction LoadableColorList() {\n  const [colors, setColors] = useState([]);\n\n  useEffect(() => {\n    fakeFetchColors().then((c) => setColors(c));\n  }, []);\n\n  const renderedColors = colors.map((color) => {\n    return <li key={color}>{color}</li>;\n  });\n\n  return <ul>{renderedColors}</ul>;\n}\n\nrender(<LoadableColorList />);","type":"code","id":"221dm"},{"content":"test('Favor findBy or findAllBy when data fetching', async () => {\n  render(<LoadableColorList />);\n\n  const els = await screen.findAllByRole('listitem');\n\n\n  expect(els).toHaveLength(3);\n});","type":"code","id":"1p7j8"}]