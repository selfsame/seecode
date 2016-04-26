# libGDX



	(ns yes.core.desktop-launcher
	  (:import [com.badlogic.gdx.backends.lwjgl LwjglApplication]
	           [org.lwjgl.input Keyboard])
	  (:gen-class))


	(defn -main []
	  (LwjglApplication. (yes.core.Game.) "yes" 1910 1070 true)
	  (Keyboard/enableRepeatEvents true))


------------

>	(def main-screen
	  (let [stage (atom nil)]
	    (proxy [Screen] []
	      (show [] (new-game))
	      (render [delta] (repl-render delta))
	      (dispose [] (.dispose batch))
	      (hide [])
	      (pause [])
	      (resize [w h] (handle-resize w h))
	      (resume []))))

	(defn -create [^Game this]
	  (.setScreen this main-screen)
	  (def batch (SpriteBatch.)))

	(defn repl-render [delta]
	  (.glClearColor (Gdx/gl) r g b a)
	  (.glClear (Gdx/gl) GL20/GL_COLOR_BUFFER_BIT)
	  (.begin batch))