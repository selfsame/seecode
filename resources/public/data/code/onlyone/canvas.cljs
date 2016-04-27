(ns onlyone.canvas)

(declare ctx)

(defn set-target [canvas]
  (def ctx (. canvas (getContext "2d") ) )
  (aset ctx "imageSmoothingEnabled" false)
  (aset ctx "mozImageSmoothingEnabled" false)
  (aset ctx "webkitImageSmoothingEnabled" false))


(defn draw-image [img sx sy sw sh x y w h]
  (. ctx (drawImage img sx sy sw sh x y w h)))

(defn fill-rect [x y w h]
  (. ctx fillRect x y w h))

(defn clear-rect [x y w h]
  (. ctx clearRect x y w h))

(defn move-to [x y]
  (. ctx (moveTo x y)))

(defn begin-path []
  (. ctx (beginPath)))

(defn close-path []
  (. ctx (closePath)))

(defn circle [x y r fill]
  (. ctx (arc x y r 0 (* (.-PI js/Math) 2) fill)))

(defn draw-text [text x y]
  (. ctx (fillText text x y)))

(defn rect [x y w h]
  (. ctx (rect x y w h)))

(defn line-to
  ([p]
    (. ctx (lineTo (first p) (last p))))
  ([x y]
    (. ctx (lineTo x y))))

(defn fill-style [color]
  (aset ctx "fillStyle" color))

(defn stroke-style [color]
  (aset ctx "strokeStyle" color))

(defn font-style [f]
(aset ctx "font" f))

(defn stroke []
  (. ctx (stroke)))

(defn fill []
  (. ctx (fill)))

(defn stroke-width [k]
  (aset ctx "strokeWidth" k))

(defn opacity [k]
  (aset ctx "globalAlpha" k))


(defn save []
  (. ctx (save)))

(defn restore []
  (. ctx (restore)))

(defn translate [x y]
  (. ctx (translate x y)))

(defn rotate [radians]
  (. ctx (rotate radians)))
