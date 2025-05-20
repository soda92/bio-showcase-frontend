export function PrimerDesign() {
  return (
    <div>
      <form action="{% url 'primer:design' %}" method="get" id="form1">
        <fieldset>
          <legend>
            <h1>Primer design</h1>
          </legend>
          <label for="sequence">DNA Sequence</label>
          <input type="text" name="sequence" value="{{result.sequence}}" />

          <label for="seq_start">Sequence start</label>
          <input type="number" name="seq_start" value="{{result.seq_start}}" />
          <label for="sequence">Sequence end</label>
          <input type="number" name="seq_end" value="{{result.seq_end}}" />
        </fieldset>
      </form>
      <button type="button" id="clear">Clear</button>
      {/* {% else %} */}
      <button type="button" id="fill_demo">Fill demo sequence</button>
      {/* {% endif %} */}
      <input type="submit" form="form1" value="Design" />

      {/* {% if result %} */}
      <h2>Left primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_left %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>

      <h2>Right primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_right %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>

      <h2>Internal primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_internal %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>
    </div>
  );
}
