'use client'
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import TodoList from "@/app/components/todo/TodoList";
import ToggleThemeButton from "@/app/components/ToggleThemeButton";


export default function Home() {
  return (
      <main>
          <Provider store={store}>
              <TodoList />
              <ToggleThemeButton />
          </Provider>
      </main>
  )
}
