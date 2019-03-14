import {Circle} from '@/components/scripts/Collider'
import CollisionDetector from '@/components/scripts/CollisionDetector'

describe('CollisionDetector', () => {
  it('circle vs circle', () => {
    const detector = new CollisionDetector()
    const t = new Circle(1.5, 1.5, 2)
    detector.add(new Circle(0, 0, 2))
    expect(detector.traverse(t))
      .to.equal(true)
  })
})
